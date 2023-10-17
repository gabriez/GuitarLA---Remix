import {
    Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link
} from '@remix-run/react'
import indexCSS from './styles/index.css';
import Header from './components/header';
import Footer from './components/footer';

export function links(){
    return (
        [
            {
                rel: 'stylesheet',
                href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com' 
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossOrigin: 'true'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
            },
            {
                rel: 'stylesheet',
                href: indexCSS
            }
        ]
    )
}

export function meta() {
    return (
        [
            {charset: 'UTF-8'},
            {title: 'Guitarla - Remix'},
            {viewport: 'width=device-width, initial-scale=1.0'}
        ]
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}
export default function App () {
    return (
        <Document>
            <Outlet/>
        </Document>
    )
}

export function ErrorBoundary () {
    const error = useRouteError();

    if (isRouteErrorResponse(error)){
        return (
            <Document>
               <p className='error'>{error.status} {error.statusText}</p>
               <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
            </Document>
        )
    } else if ( error instanceof Error) {
        return (
            <Document>
               <p className='error'>{error.message} {error.stack}</p>
               <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>   
            </Document>
        )
    }
}