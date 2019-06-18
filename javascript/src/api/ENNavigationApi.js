import { electrodeBridge } from 'react-native-electrode-bridge';
import EnNavigationRequests from './EnNavigationRequests';
import EnNavigationEvents from './EnNavigationEvents';

const REQUESTS = new EnNavigationRequests(electrodeBridge);

export function requests() {
    return REQUESTS;
}

const EVENTS = new EnNavigationEvents(electrodeBridge);

export function events() {
  return EVENTS;
}



export default ({requests, events});
