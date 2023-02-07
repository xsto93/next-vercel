import { DarkLayout } from "@components/layouts/DarkLayout";
import { MainLayout } from "@components/layouts/MainLayout";



export default function AboutPage() {
  return (
    <>
        <h1 className={'description'}>About Page</h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/about.jsx</code>
          </p>
        </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
