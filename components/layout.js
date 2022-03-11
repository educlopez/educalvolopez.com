import MyFooter from './mainFooter'
import KbarMenu from './kbarMenu'
import Meta from './meta'
import MyFloatNav from './floatNav'

export default function Layout({ preview, children }) {
  return (
    <div>
      <Meta />
      <div className="bg-white dark:bg-gray-900 bg-custom-gradient">
        <KbarMenu />
        <main className="container px-5 mx-auto">{children}</main>
        <MyFloatNav />
        <MyFooter />
      </div>
      <script src="/js/custom.js"></script>
    </div>
  );
}
