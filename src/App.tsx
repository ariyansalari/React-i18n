import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Trans i18nKey={"tagTranslate"}>
        Welcome, <b>user</b>! <span>Test</span>
      </Trans>
      <h1>
        {t("notificationMessage", {
          count: 1,
        })}
      </h1>
      <h2>
        {t("notificationMessage", {
          count: 2,
        })}
      </h2>
    </>
  );
}

export default App;
