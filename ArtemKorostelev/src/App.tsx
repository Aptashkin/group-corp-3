import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    useLocation,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const routes = [
        {
            path: "/lesson01",
            title: "Lesson #1",
            content: lazy(() => import('./components/lesson-1/MessagesList'))
        },
        {
            path: "/lesson02",
            title: "Lesson #2",
            content: lazy(() => import('./components/lesson-2/Lesson2'))
        },
        {
            path: "/lesson03",
            title: "Lesson #3",
            content: lazy(() => import('./components/lesson-3/Lesson3'))
        },
        {
            path: "/lesson04",
            title: "Lesson #4",
            content: lazy(() => import('./components/lesson-4/Lesson4'))
        }
    ];

    const NoMatch = () => {
        let location = useLocation();

        return (
            <div>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        );
    }

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "15%",
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {
                            routes.map(route => <li key={route.path}>
                                    <Link to={route.path}>{route.title}</Link>
                                </li>)
                        }
                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/lesson04" /> }
                        />
                        <Suspense fallback={<>azaza</>}>
                        {
                            routes.map(route =>
                                    <Route key={route.path} exact path={route.path} component={route.content} />
                           )
                        }
                        </Suspense>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
