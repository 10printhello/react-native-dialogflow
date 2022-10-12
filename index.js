'use strict';

import { Dialogflow_V2 } from './js/Dialogflow_V2';


/**
 * DIALOGFLOW V2
 */
var dialogflow2 = new Dialogflow_V2();

dialogflow2.setConfiguration = async function (clientEmail, privateKey, languageTag, projectId) {
    dialogflow2.accessToken = await dialogflow2.generateAccessToken(clientEmail, privateKey);
    dialogflow2.languageTag = languageTag;
    dialogflow2.projectId = projectId;
    dialogflow2.sessionId = dialogflow2.sessionId ? dialogflow2.sessionId : dialogflow2.guid();

}

export { dialogflow2 as Dialogflow_V2 };

