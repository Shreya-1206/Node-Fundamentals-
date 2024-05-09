import {EventEmitter} from 'events';
import {Publisher } from './pub.js';
import { Subscriber } from './sub.js';

const eventEmitter = new EventEmitter();

const pub = new Publisher();
const sub1 = new Subscriber(eventEmitter);

pub.greetings(eventEmitter);