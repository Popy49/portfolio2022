import { Link } from "react-router-dom"
function ErrorPage() {
  return (
    <main className="errorPage">
      <h1 className="home__backTitle">
        It seems that you have fallen into the abyss
      </h1>
      <div>
        {" "}
        <Link to={"/"}>Get back to safety</Link>
        {/* <Link to={"/"}>KEEP DIGGING</Link> */}
      </div>
    </main>
  )
}

export default ErrorPage
