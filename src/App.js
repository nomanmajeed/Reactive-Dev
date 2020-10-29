import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppHero from './components/HeroBlock';
import AppAbout from './components/About';
import AppFeature from './components/Feature';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHero />
        <AppAbout />
        <AppFeature />
      </Content>

    </Layout>
  );
}

export default App;
