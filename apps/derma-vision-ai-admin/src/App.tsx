import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImagesList } from "./images/ImagesList";
import { ImagesCreate } from "./images/ImagesCreate";
import { ImagesEdit } from "./images/ImagesEdit";
import { ImagesShow } from "./images/ImagesShow";
import { ConsultationsList } from "./consultations/ConsultationsList";
import { ConsultationsCreate } from "./consultations/ConsultationsCreate";
import { ConsultationsEdit } from "./consultations/ConsultationsEdit";
import { ConsultationsShow } from "./consultations/ConsultationsShow";
import { AnalysisResultsList } from "./analysisResults/AnalysisResultsList";
import { AnalysisResultsCreate } from "./analysisResults/AnalysisResultsCreate";
import { AnalysisResultsEdit } from "./analysisResults/AnalysisResultsEdit";
import { AnalysisResultsShow } from "./analysisResults/AnalysisResultsShow";
import { ReportsList } from "./reports/ReportsList";
import { ReportsCreate } from "./reports/ReportsCreate";
import { ReportsEdit } from "./reports/ReportsEdit";
import { ReportsShow } from "./reports/ReportsShow";
import { NotificationsList } from "./notifications/NotificationsList";
import { NotificationsCreate } from "./notifications/NotificationsCreate";
import { NotificationsEdit } from "./notifications/NotificationsEdit";
import { NotificationsShow } from "./notifications/NotificationsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HomeRemediesList } from "./homeRemedies/HomeRemediesList";
import { HomeRemediesCreate } from "./homeRemedies/HomeRemediesCreate";
import { HomeRemediesEdit } from "./homeRemedies/HomeRemediesEdit";
import { HomeRemediesShow } from "./homeRemedies/HomeRemediesShow";
import { GoogleGeminiResultsList } from "./googleGeminiResults/GoogleGeminiResultsList";
import { GoogleGeminiResultsCreate } from "./googleGeminiResults/GoogleGeminiResultsCreate";
import { GoogleGeminiResultsEdit } from "./googleGeminiResults/GoogleGeminiResultsEdit";
import { GoogleGeminiResultsShow } from "./googleGeminiResults/GoogleGeminiResultsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DermaVision AI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Images"
          list={ImagesList}
          edit={ImagesEdit}
          create={ImagesCreate}
          show={ImagesShow}
        />
        <Resource
          name="Consultations"
          list={ConsultationsList}
          edit={ConsultationsEdit}
          create={ConsultationsCreate}
          show={ConsultationsShow}
        />
        <Resource
          name="AnalysisResults"
          list={AnalysisResultsList}
          edit={AnalysisResultsEdit}
          create={AnalysisResultsCreate}
          show={AnalysisResultsShow}
        />
        <Resource
          name="Reports"
          list={ReportsList}
          edit={ReportsEdit}
          create={ReportsCreate}
          show={ReportsShow}
        />
        <Resource
          name="Notifications"
          list={NotificationsList}
          edit={NotificationsEdit}
          create={NotificationsCreate}
          show={NotificationsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="HomeRemedies"
          list={HomeRemediesList}
          edit={HomeRemediesEdit}
          create={HomeRemediesCreate}
          show={HomeRemediesShow}
        />
        <Resource
          name="GoogleGeminiResults"
          list={GoogleGeminiResultsList}
          edit={GoogleGeminiResultsEdit}
          create={GoogleGeminiResultsCreate}
          show={GoogleGeminiResultsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
