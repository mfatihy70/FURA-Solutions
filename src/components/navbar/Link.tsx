interface LinkProps {
  name: string;
  href: string;
}

const Link = ({ name, href }: LinkProps) => {
  return (
    <li className="nav-item">
      <a className="nav-link font-link" aria-current="page" data-bs-toggle="pill" href={`/${href}`}>
        {name}
      </a>
    </li>
  );
};

export default Link;
