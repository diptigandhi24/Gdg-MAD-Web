import HomePage from '../components/Home/container'

// const loaderOptions = {
//   timeout: 10000,
//   loading:() => {
//     return (
//       <div className='row base-layout apply-global-loader'>
//         <div className='loader' />
//       </div>
//     )
//   }
// }

// defining path for the components
let routesList = [
  { path: '/', component: HomePage, exactPath: true },
  { path: '/home', component: HomePage, exactPath: true },
  { path: '/pagenotfound', component: HomePage, exactPath: true }
]

export default routesList
