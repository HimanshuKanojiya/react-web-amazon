interface IRoute {
  namePattern: string;
  path: string;
  pageComponent: React.FC<{}>;
  isProtectedPage: boolean;
}

type Routes = IRoute[];
