import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#4d4d4d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f1f1f1"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loading;
