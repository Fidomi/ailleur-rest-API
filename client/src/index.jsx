import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Error from './pages/Error';
import GlobalStyle from './utils/styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Maps from './pages/Maps';
import MyDestination from './pages/MyDestination';
// import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import { ResultsProvider } from './utils/context/index';
import Refining from './pages/Refining';
import Survey from './pages/Survey';
import ThematicMap from './pages/ThematicMap';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
            <ResultsProvider>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/cartes" component={Maps} />
                            <Route path="/cartes/:type">
                                <ThematicMap />
                            </Route>
                            <Route
                                exact
                                path="/ma-destination"
                                component={Survey}
                            />
                            <Route
                                path="/ma-destination/resultats"
                                component={MyDestination}
                            />
                            <Route
                                path="/ma-destination/reglages"
                                component={Refining}
                            />
                            <Route component={Error} />
                            <Home />
                        </Switch>
                    </main>
                </BrowserRouter>
            </ResultsProvider>
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
