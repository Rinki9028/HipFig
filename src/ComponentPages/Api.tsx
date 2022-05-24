import React, { Component } from 'react'
interface ApiProps {
    DataisLoaded: string;
    item: any;
    items: any;
    children?: React.ReactNode; 
  }
export class Api extends Component  <any, any>{
 // Constructor 
 constructor(props: any) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}

// ComponentDidMount is used to
// execute the code 
componentDidMount() {
        fetch(
"http://192.168.47.201:3330/+0cities")
// fetch("api/cities")
//     fetch(
// "https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
}
render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return (
    <div>
         {
            items.map((items : any ) => (
              <ol key={items.id}>
              Name: {items.asset_id}<br />
              Username: {items.region}<br />
              Email: {items.region_states}<br />
              Password: {items.region_city}<br />
              Block: {items.city_location_name}<br />
              SendEmail: {items.city_location_address}<br />
              RegisterDate: {items.open_timings}<br />
              LastvisitDate: {items.city_location_duration}<br />
              Activation: {items.city_location_desc}<br />
              Params: {items.city_meta_tag}<br />
              LastResetTime: {items.city_meta_desc}<br />
              ResetCount: {items.city_location_image}<br />
              OtpKey: {items.city_ad_content}<br />
              Otep: {items.ordering}<br />
              RequireReset: {items.state}<br />
              RequireReset: {items.checked_out}<br />
              RequireReset: {items.checked_out_time}<br />
              RequireReset: {items.created_by}<br />
              RequireReset: {items.modified_by}<br />
              </ol>
            ))
        }
    </div>
);
}
}

export default Api
