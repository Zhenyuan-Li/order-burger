import { useState, useEffect } from 'react';

export default ({ interceptors }) => {
  const [error, setError] = useState(null);

  const reqInterceptor = interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = interceptors.response.use(
    (res) => res,
    (error) => {
      setError(error);
    }
  );

  useEffect(() => {
    return () => {
      interceptors.request.eject(reqInterceptor);
      interceptors.response.eject(resInterceptor);
    };
  }, [
    interceptors.request,
    interceptors.response,
    reqInterceptor,
    resInterceptor,
  ]);

  const errorConfirmHandler = () => {
    setError(null);
  };

  return [error, errorConfirmHandler];
};
