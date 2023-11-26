
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
    children: React.ReactElement;
};

/*
  add the requireAuth property to the page component
  to protect the page from unauthenticated users
  e.g.:
  OrderDetail.requireAuth = true;
  export default OrderDetail;
 */

export const Layout = ({ children }: Props): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [router]);

    return <div>{children} </div>
};
