import React, { useState, useEffect, useMemo } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Styled, ThemeProvider } from 'theme-ui'
import { system } from '@theme-ui/presets'

import { transform } from '@babel/standalone'
import babelPluginTransformJsx from '@babel/plugin-transform-react-jsx'
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx'
import babelPluginSetDefaultExportToContainer from './babel-plugin-set-default-export-to-container'
import babelPluginAddTuid from './babel-plugin-add-tuid-prop'
import babelPluginRemoveNamedExports from './babel-plugin-remove-named-exports'
import babelPluginDnd from './babel-plugin-dnd'
import babelPluginRemoveTuid from './babel-plugin-remove-tuid'
import babelPluginReorderBlocks from './babel-plugin-reorder-blocks'
import babelPluginApplySxProp from './babel-plugin-apply-sx-prop'
import babelPluginInjectBlocksRoot from './babel-plugin-inject-blocks-root'

import pragma from './pragma'
import CODE from './fixture'

const transformPlugins = [
  babelPluginSetDefaultExportToContainer,
  babelPluginDnd,
  babelPluginInjectBlocksRoot,
  babelPluginRemoveNamedExports,
  babelPluginTransformJsx
]

const toTransformedJSX = code => {
  try {
    return transform(code, {
      plugins: transformPlugins
    }).code
  } catch (e) {
    return null
  }
}

const toRawJSX = code => {
  try {
    return transform(code, {
      plugins: [babelPluginSyntaxJsx, babelPluginRemoveTuid]
    }).code
  } catch (e) {
    return null
  }
}

const reorderJSXBlocks = (code, drag) => {
  return transform(code, {
    plugins: [babelPluginSyntaxJsx, [babelPluginReorderBlocks, drag]]
  }).code
}

export default () => {
  const [code, setCode] = useState(null)
  const [transformedCode, setTransformedCode] = useState(null)
  const [elementId, setElementId] = useState(null)

  const scope = {
    BLOCKS_DragDropContext: DragDropContext,
    BLOCKS_Droppable: Droppable,
    BLOCKS_Draggable: Draggable,
    BLOCKS_DraggableInner: props => <div {...props} />,
    BLOCKS_DroppableInner: props => <div {...props} />,
    BLOCKS_onDragEnd: drag => {
      if (!drag.destination) {
        return
      }

      const newCode = reorderJSXBlocks(code, drag)
      setCode(newCode)
    },
    jsx: pragma(setElementId),
    Styled
  }

  useEffect(() => {
    const { code: newCode } = transform(CODE, {
      plugins: [babelPluginSyntaxJsx, babelPluginAddTuid]
    })

    setCode(newCode)
  }, [])

  const element = useMemo(() => {
    if (!transformedCode) {
      return null
    }

    /* eslint-disable */
    const fn = new Function(
      'React',
      ...Object.keys(scope),
      `${transformedCode};
      return React.createElement(BLOCKS_Container)`
    )
    /* eslint-enable */

    return fn(React, ...Object.values(scope))
  }, [transformedCode, scope])

  useEffect(() => {
    const newTransformedCode = toTransformedJSX(code)

    if (newTransformedCode) {
      setTransformedCode(newTransformedCode)
    }
  }, [code])

  if (!code || !transformedCode) {
    return null
  }

  const handleChange = () => {
    const { code: newCode } = transform(code, {
      plugins: [babelPluginSyntaxJsx, [babelPluginApplySxProp, { elementId }]]
    })

    setCode(newCode)
  }

  return (
    <ThemeProvider theme={system}>
      <Styled.root>
        <div
          style={{
            display: 'flex',
            marginTop: 100,
            marginBottom: 100,
            width: 4000
          }}
        >
          {element}
          <textarea
            style={{
              width: 300,
              maxHeight: 300,
              fontSize: 20,
              marginLeft: 100
            }}
            onChange={e => setCode(e.target.value)}
            value={toRawJSX(code)}
          />
          <textarea
            style={{
              width: 300,
              maxHeight: 300,
              fontSize: 10,
              marginLeft: 100
            }}
            onChange={e => setCode(e.target.value)}
            value={transformedCode.trim()}
          />
        </div>
        {elementId ? <button onClick={handleChange}>Change me!</button> : null}
      </Styled.root>
    </ThemeProvider>
  )
}
