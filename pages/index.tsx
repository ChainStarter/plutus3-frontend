import {useTranslation} from "react-i18next";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import Header from "../components/Header";

export default function Home() {

  const { t } = useTranslation()
  return (
    <Layout>
      <>
        <Header/>
        <HomePage/>
      </>
    </Layout>
  );
}
