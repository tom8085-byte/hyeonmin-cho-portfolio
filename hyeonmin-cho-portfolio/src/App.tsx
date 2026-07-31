import NotFound from '@/pages/not-found';
import Portfolio from '@/pages/portfolio';
import ResearchThz from '@/pages/research-thz';
import ProjectDetail from '@/pages/project-detail';
import ExperienceDetail from '@/pages/experience-detail';
import { Route, Switch, Router as WouterRouter } from 'wouter';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/research/terahertz-spectroscopy" component={ResearchThz} />
      <Route path="/projects/:projectId">
        {(params) => <ProjectDetail projectId={params.projectId} />}
      </Route>
      <Route path="/experience/:experienceId">
        {(params) => <ExperienceDetail experienceId={params.experienceId} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
