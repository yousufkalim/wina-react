import io from 'socket.io-client';
import {
    // token
    user, baseUri
} from "../urlConfig";

export default io(baseUri, {
    query: `userConnectionId=${user?._id}`,
});