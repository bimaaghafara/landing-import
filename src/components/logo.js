/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: '#eee',
        color: 'currentColor'
      }}
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <h3>
        Ghafara Universe
      </h3>
    </Link>
  );
}
