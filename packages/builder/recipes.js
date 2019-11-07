/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Button } from '@theme-ui/components'
const Link = Styled.a

export const HeaderA = () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header'
    }}
  >
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink',
        p: 2
      }}
    >
      Hello
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link
      to="/blog"
      sx={{
        variant: 'styles.navlink',
        p: 2
      }}
    >
      Blog
    </Link>
    <Link
      to="/about"
      sx={{
        variant: 'styles.navlink',
        p: 2
      }}
    >
      About
    </Link>
  </header>
)

export const HeaderAA = () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header',
      justifyContent: 'space-between'
    }}
  >
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink',
        p: 2
      }}
    >
      Hello
    </Link>
    <nav>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Button mx={2} variant="secondary">
        Login
      </Button>
      <Button>Sign Up</Button>
    </nav>
  </header>
)

export const HeaderB = () => (
  <header
    sx={{
      variant: 'styles.header'
    }}
  >
    <div
      sx={{
        maxWidth: 768,
        mx: 'auto',
        px: 3,
        display: 'flex',
        alignItems: 'baseline'
      }}
    >
      <Link
        to="/"
        sx={{
          variant: 'styles.navlink',
          fontSize: 5,
          py: 2
        }}
      >
        Hello
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 2
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 2
        }}
      >
        About
      </Link>
    </div>
  </header>
)

export const HeaderC = () => (
  <header
    sx={{
      display: 'grid',
      gridGap: 3,
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      py: 3,
      gridAutoFlow: 'row',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      variant: 'styles.header'
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 3],
        order: [0, 1]
      }}
    >
      <Link to="/" title="Home">
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      <Link
        to="/work"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Work
      </Link>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        order: 2
      }}
    >
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderC2 = () => (
  <header
    sx={{
      display: 'grid',
      gridGap: 3,
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      py: 3,
      gridAutoFlow: 'row',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      variant: 'styles.header'
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 3],
        order: [0, 1]
      }}
    >
      <Link to="/" title="Home">
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <Link
        to="/work"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Work
      </Link>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        order: 2
      }}
    >
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderC3 = () => (
  <header
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      py: 3,
      variant: 'styles.header',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        order: [0, 1],
        width: ['100%', 'auto'],
        px: 2
      }}
    >
      <Link to="/" title="Home" sx={{ lineHeight: 1 }}>
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Link
        to="/work"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Work
      </Link>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        order: 2
      }}
    >
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderD = () => (
  <header
    sx={{
      display: 'grid',
      gridGap: 3,
      gridTemplateColumns: 'repeat(3, 1fr)',
      px: 3,
      py: 4,
      alignItems: 'center',
      variant: 'styles.header'
    }}
  >
    <button
      title="Toggle Menu"
      sx={{
        appearance: 'none',
        width: 32,
        height: 32,
        m: 0,
        p: 1,
        color: 'inherit',
        bg: 'transparent',
        border: 0,
        ':focus': {
          outline: '2px solid'
        },
        ':hover': {
          color: 'primary'
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentcolor"
        viewBox="0 0 24 24"
        sx={{
          display: 'block',
          margin: 0
        }}
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Link
        to="/"
        sx={{
          variant: 'styles.navlink',
          px: 3,
          py: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          border: '4px solid',
          color: 'primary'
        }}
      >
        Home
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 3
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 3
        }}
      >
        About
      </Link>
    </div>
  </header>
)

export const HeaderF = () => (
  <header
    sx={{
      py: 4,
      variant: 'styles.header'
    }}
  >
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3
      }}
    >
      <Link to="/" title="Home">
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Link
        to="/work"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Work
      </Link>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderFA = () => (
  <header
    sx={{
      py: 4,
      variant: 'styles.header',
      textAlign: 'center'
    }}
  >
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3
      }}
    >
      <Link to="/" title="Home">
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/black/white?height=160&width=480&fontSize=1.4&baseline=2&fontWeight=900&text=Awesomeness"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'inline-block',
        justifyContent: 'center',
        width: 'auto',
        mx: 'auto',
        mb: 4,
        borderTopStyle: 'solid',
        borderTopWidth: 'thin',
        borderTopColor: 'gray',
        borderBottomStyle: 'solid',
        borderBottomWidth: 'thin',
        borderBottomColor: 'gray',
        px: 4,
        py: 3
      }}
    >
      <Link
        to="/work"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Work
      </Link>
      <Link
        to="/blog"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderFB = () => (
  <header
    sx={{
      py: 4,
      variant: 'styles.header',
      textAlign: 'center'
    }}
  >
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3
      }}
    >
      <Link to="/" title="Home">
        <img
          alt="UI Logo"
          src="https://contrast.now.sh/black/white?height=160&width=480&fontSize=1.4&baseline=2&fontWeight=900&text=Awesomeness"
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        mx: 'auto',
        mb: 4,
        borderTopStyle: 'solid',
        borderTopWidth: 'thin',
        borderTopColor: 'gray',
        borderBottomStyle: 'solid',
        borderBottomWidth: 'thin',
        borderBottomColor: 'gray',
        p: 3
      }}
    >
      <nav>
        <Link
          to="/work"
          sx={{
            variant: 'styles.navlink',
            p: 2
          }}
        >
          Work
        </Link>
        <Link
          to="/blog"
          sx={{
            variant: 'styles.navlink',
            p: 2
          }}
        >
          Blog
        </Link>
        <Link
          to="/about"
          sx={{
            variant: 'styles.navlink',
            p: 2
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          sx={{
            variant: 'styles.navlink',
            p: 2
          }}
        >
          Contact
        </Link>
      </nav>
      <nav>
        <Button variant="secondary" mr={2}>
          Sign In
        </Button>
        <Button>Sign Up</Button>
      </nav>
    </div>
  </header>
)

export const FooterA = () => (
  <footer
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      p: 2,
      variant: 'styles.footer'
    }}
  >
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      Home
    </Link>
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      Blog
    </Link>
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      About
    </Link>
    <div sx={{ mx: 'auto' }} />
    <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
  </footer>
)

export const FooterB = () => (
  <footer
    sx={{
      fontSize: 1,
      color: 'background',
      bg: 'text',
      variant: 'styles.footer'
    }}
  >
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        maxWidth: 768,
        mx: 'auto',
        px: 2,
        py: 4
      }}
    >
      <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
        Home
      </Link>
      <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
        Blog
      </Link>
      <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
        About
      </Link>
      <div sx={{ mx: 'auto' }} />
      <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
    </div>
  </footer>
)

export const FooterC = () => (
  <footer
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
      variant: 'styles.footer'
    }}
  >
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      Home
    </Link>
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      Blog
    </Link>
    <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
      About
    </Link>
  </footer>
)

export const FooterD = () => (
  <footer
    sx={{
      fontSize: 1,
      variant: 'styles.footer'
    }}
  >
    <div
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(4, 32px)',
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
        gridAutoFlow: 'column',
        px: 2,
        py: 4
      }}
    >
      <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
        Home
      </Link>
      <Link to="/work" sx={{ variant: 'styles.navlink', p: 2 }}>
        Work
      </Link>
      <Link to="/blog" sx={{ variant: 'styles.navlink', p: 2 }}>
        Blog
      </Link>
      <Link to="/about" sx={{ variant: 'styles.navlink', p: 2 }}>
        About
      </Link>
      <Link to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
        Products
      </Link>
      <Link to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
        Community
      </Link>
      <Link to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
        Support
      </Link>
      <Link to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
        Contact
      </Link>
      <Link to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
        Support
      </Link>
      <Link to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
        Products
      </Link>
      <Link to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
        Contact
      </Link>
      <Link to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
        Community
      </Link>
      <Link to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
        Products
      </Link>
      <Link to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
        Community
      </Link>
      <Link to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
        Support
      </Link>
      <Link to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
        Contact
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 3
      }}
    >
      <Link to="/privacy-policy" sx={{ color: 'inherit' }}>
        Privacy Policy
      </Link>
      <div sx={{ mx: 1 }} />
      <Link to="/terms-of-use" sx={{ color: 'inherit' }}>
        Terms of Use
      </Link>
      <div sx={{ mx: 1 }} />© 2019 Jane Doe
    </div>
  </footer>
)

export const FooterE = () => (
  <footer
    sx={{
      variant: 'styles.footer',
      maxWidth: 768,
      mx: 'auto',
      py: [4, 6]
    }}
  >
    <Link
      to="mailto:hello@example.org"
      sx={{
        fontWeight: 'bold',
        fontSize: 5,
        color: 'inherit'
      }}
    >
      hello@example.org
    </Link>
    <p sx={{ mt: -1, mb: 4, fontSize: 1 }}>© 2019 Jane Doe</p>
    <div sx={{ display: 'flex' }}>
      <Link to="/privacy-policy" sx={{ color: 'inherit' }}>
        Privacy Policy
      </Link>
      <div sx={{ ml: 3 }} />
      <Link to="/terms-of-use" sx={{ color: 'inherit' }}>
        Terms of Use
      </Link>
    </div>
  </footer>
)

export const ImageTitleA = () => (
  <div>
    <h1
      sx={{
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/006.jpg)',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 8,
        fontWeight: 800
      }}
    >
      Hello, world!
    </h1>
  </div>
)

export const ImageTitleB = () => (
  <div>
    <h1
      sx={{
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/058.jpg)',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 8,
        fontWeight: 800
      }}
    >
      Hello, world!
    </h1>
  </div>
)

export const ImageTitleC = () => (
  <div
    sx={{
      backgroundColor: 'black',
      color: 'white',
      py: 4
    }}
  >
    <h1
      sx={{
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/048.jpg)',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundSize: 'contain',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 8,
        fontWeight: 800,
        backgroundColor: 'text',
        color: 'background'
      }}
    >
      Hello, world!
    </h1>
  </div>
)

export const H1 = () => (
  <div>
    <Styled.h1>Heading One</Styled.h1>
  </div>
)
export const H2 = () => (
  <div>
    <Styled.h2>Heading Two</Styled.h2>
  </div>
)
export const H3 = () => (
  <div>
    <Styled.h3>Heading Three</Styled.h3>
  </div>
)
export const H4 = () => (
  <div>
    <Styled.h4>Heading Four</Styled.h4>
  </div>
)
export const P = () => (
  <div>
    <Styled.p sx={{ maxWidth: 320 }}>Here's an awesome paragraph</Styled.p>
  </div>
)
