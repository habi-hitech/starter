// import PATH from "./PATHS";

// import Login from "../Public/Login";

// // import HomeMain from "../Private/HomeMain";
// import Sync from "../Private/Settings/Sync";

// import ModulesView from "../Private/ModulesView";
// import CurrentStock from "../Private/Stock/CurrentStock";
// import CurrentBranch from "../Private/Stock/CurrentBranch";

// var loginData = localStorage.getItem("login");
// var loginValue = JSON.parse(loginData);

// const publicRoutes = [{ path: PATH.LOGIN, element: <Login /> }];

// const protectedRotues = [
//   { path: PATH.DASHBOARD, element: <Home /> },
//   { path: PATH.SETTINGS, element: <Sync /> },
//   { path: PATH.MODULES_VIEW, element: <ModulesView /> },

//   //ONLINE >> CURRENT
//   { path: PATH.ONLINE_CURRENT_STOCK, element: <CurrentStock /> },
//   { path: PATH.ONLINE_CURRENT_BRANCH, element: <CurrentBranch /> },
//   { path: PATH.ONLINE_CURRENT_SUPPLIER, element: <CurrentSupplier /> },
//   { path: PATH.ONLINE_CURRENT_STOCKGROUP, element: <CurrentStockGroups /> },
//   { path: PATH.ONLINE_CURRENT_POLICY, element: <CurrentPricePolicy /> },

//   //ONLINE >> NEW SYSTEM
//   { path: PATH.ONLINE_NEW_STOCK, element: <NewSystemStock /> },
//   { path: PATH.ONLINE_NEW_BRANCH, element: <NewSystemBranch /> },
//   { path: PATH.ONLINE_NEW_SUPPLIER, element: <NewSystemSupplier /> },
//   { path: PATH.ONLINE_NEW_STOCKGROUP, element: <NewSystemStockGroups /> },
//   { path: PATH.ONLINE_NEW_PRICE, element: <NewSystemPricePolicy /> },

//   //ONLINE >> ORDERS
//   { path: PATH.ONLINE_ORDERS_ALL, element: <MainOrderPage /> },
//   { path: PATH.ONLINE_ORDERS_EXPORT, element: <CSVExport /> },

//   //ONLINE >> EXCEPTION_REPORT
//   { path: PATH.ONLINE_EXCEPTION_PRICEORDER, element: <MainOrderPage1 /> },
//   { path: PATH.ONLINE_EXCEPTION_ZERO, element: <ZeroPrice /> },
//   { path: PATH.ONLINE_EXCEPTION_LONGDESCRIPTION, element: <TitleException /> },
//   { path: PATH.ONLINE_EXCEPTION_CATEGORY, element: <CategoryException /> },
//   { path: PATH.ONLINE_EXCEPTION_IMAGE, element: <ImageMissing /> },
//   { path: PATH.ONLINE_EXCEPTION_SYNC, element: <SyncStatus /> },

//   //ONLINE >> ACCOUNTS
//   { path: PATH.ONLINE_ACCOUNT_CURRENT, element: <CurrentCompanyAccount /> },

//   { path: PATH.ONLINE_RESYNCSKU, element: <ResyncFromAx /> },
//   { path: PATH.ONLINE_SHIPPIT, element: <ShippitTesting /> },

//   //ONLINE >> USERS
//   // ...(loginValue && loginValue.UserLevel === 1
//   //   ? [
//   { path: PATH.ONLINE_USERS_LIST, element: <ListUsers /> },
//   { path: PATH.ONLINE_USERS_ADD, element: <AddUser /> },
//   { path: PATH.ONLINE_USERS_ADDBYID, element: <AddUser /> },
//   { path: PATH.ONLINE_USERS_LISTMODULES, element: <ListUserModules /> },
//   { path: PATH.ONLINE_USERS_ADDMODULE, element: <AddUserModule /> },
//   {
//     path: PATH.ONLINE_USERS_ADDMODULEBYID,
//     element: <AddUserModule />,
//   },
//   //   ]
//   // : []),

//   //NOT LISTED IN DRAWER MENUS
//   { path: PATH.ORDERS_ACCEPTED, element: <AcceptedOrders /> },
//   { path: PATH.REJECTED_ORDERS, element: <RejectedOrders /> },
// ];

// export { publicRoutes, protectedRotues };
