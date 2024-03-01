import "./loading-indicator.scss"
import { ThreeDots } from "react-loader-spinner"

function LoadingIndicator() {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#fff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass="wrapper"
    />
  )
}

export default LoadingIndicator
