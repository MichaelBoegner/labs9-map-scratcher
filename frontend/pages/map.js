import dynamic from 'next/dynamic'
import { Dimmer, Loader } from 'semantic-ui-react'
import { USERVISITS_QUERY, FRIENDSVISITS_QUERY } from '../services/queries'

import MapIndex from '../components/MapHeader/MapIndex.js'
import Legend from '../components/MapLegend/Legend.js'

const DynamicMap = dynamic(() => import('../components/Map/Map'), {
  loading: () => (
    <Dimmer active>
      <Loader size="large" />
    </Dimmer>
  ),
  ssr: false
})

export default function () {
    return ( 
        <div>
            <MapIndex />
            <div>
                <Query query={USERVISITS_QUERY} variable={{id}}>
                    {responseUserData}
                </Query>
            </div>
        </div>
    );
}

function renderLoading() {
    return (
        <div>Loading</div>
    );
}
function renderError() {
    return (
        <div>Error</div>
    );
}

function responseUserData (response) {
    // Get data from response
    const loading = response.load;
    const error = response.error;
    const userData = response.data;
    // Handle loading and errors
    if(loading) { return renderLoading();}
    if(error  ) { return renderError();  }
    // Magic
    let responderFunction = responseFriendsVisits.bind(userData);
    // Return jsx rendering
    return (
        <Query query={FRIENDSVISITS_QUERY} variable={{id}}>
            {responderFunction}
        </Query>
    );
}

function responseFriendsVisits (response) {
    // Get data from response
    const loading = response.load;
    const error = response.error;
    const friendsVisitsData = response.data;
    // Handle loading and errors
    if(loading) { return renderLoading();}
    if(error  ) { return renderError();  }
    // Return jsx rendering
    return finalMapRender(friendsVisitsData, this) // <- Magic from earlier magic
}

function finalMapRender(borderData, userData) {
    return (
        <div>
            <DynamicMap borderData={this.state.borderData} />
            <Legend />
        </div>
    );
}
