import React, { Component } from 'react'
import { Editor, getEventRange, getEventTransfer } from 'slate-react'

import schema from '../lib/schema'
import initialValue from '!!raw-loader!../lib/value.mdx'
import { parseMDX, serializer } from '@blocks/serializer'
import { isUrl, isImageUrl } from '../lib/util'

import ThemeEditorPlugin from '../plugins/theme-editor'
import defaultTheme from './theme'
import defaultPlugins from '../plugins'
import Toolbar from './Toolbar'

const insertImage = (change, src, target) => {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    type: 'image',
    data: { src }
  })
}

const insertLink = (change, href, target) => {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    type: 'link',
    data: { href }
  })
}

class BlockEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: serializer.deserialize(
        parseMDX(props.initialValue || initialValue)
      )
    }
  }

  emitChange = () => {
    const { value } = this.state
    this.props.onChange({ value })
  }

  // think this can be a renderEditor plugin
  handleChange = ({ value }) => {
    this.setState({ value }, this.emitChange)
  }

  handleKeyDown = (event, change, next) => {
    // shortcuts
    switch (event.key) {
      case '/':
        this.setState({ commandMenu: true })
        return
      case 'Escape':
        this.setState({ emojiMenu: false })
        this.setState({ menu: false })
        return
      default:
        return next()
    }
  }

  handlePaste = (event, editor, next) => {
    const { value } = editor
    const { document, startBlock } = value

    const target = getEventRange(event, editor)
    const transfer = getEventTransfer(event)
    const { type, text } = transfer

    if (type === 'text' || type === 'fragment') {
      if (isImageUrl(text)) {
        return editor.command(insertImage, text, target)
      }

      if (isUrl(text)) {
        return editor.command(insertLink, text, target)
      }

      const parent = document.getParent(startBlock.key)
      // We're inside a table and pasting a fragment, for now lets
      // not allow embedded table pasting.
      if (type === 'fragment' && parent.type === 'table_cell') {
        return editor.insertText(text || '')
      }

      return next()
    }

    next()
  }

  render() {
    const { plugins, theme } = this.props
    const allPlugins = [ThemeEditorPlugin({ theme }), ...plugins]

    return (
      <div style={{ minHeight: '100vh' }}>
        <Editor
          {...this.props}
          ref={editor => (this.editor = editor)}
          schema={schema}
          placeholder="Write some MDX..."
          plugins={allPlugins}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onPaste={this.handlePaste}
        />
      </div>
    )
  }
}

BlockEditor.defaultProps = {
  components: {},
  theme: defaultTheme,
  plugins: defaultPlugins,
  renderEditor: (props, editor, next) => {
    const children = next()
    return (
      <>
        <Toolbar editor={editor} />
        {children}
      </>
    )
  }
}

export default BlockEditor
