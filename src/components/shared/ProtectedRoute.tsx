import * as React from 'react';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

type ProtectedRouteProps = {
  children: React.ReactNode;
  check: () => Promise<boolean>;
  redirectPath: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = (
  props: ProtectedRouteProps,
) => {
  const { check, children, redirectPath } = props;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  useEffect(() => {
    check().then((bool) => setIsLoggedIn(bool));
  }, [check]);
  if (!isLoggedIn) {
    return <Redirect to={redirectPath} />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
