'use strict';

import { Dialogflow_V3 } from './js/Dialogflow_V3';


/**
 * DIALOGFLOW V3
 */
var dialogflow3 = new Dialogflow_V3();

dialogflow3.setConfiguration = async function (clientEmail, privateKey, languageTag, projectId, locationId, agentId) {
    dialogflow3.accessToken = await dialogflow3.generateAccessToken(clientEmail, privateKey);
    dialogflow3.languageTag = languageTag;
    dialogflow3.projectId = projectId;
    dialogflow3.sessionId = dialogflow3.sessionId ? dialogflow3.sessionId : dialogflow3.guid();
    dialogflow3.agentId = agentId;
    dialogflow3.locationId = locationId;
}

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

export { dialogflow3 as Dialogflow_V3, dialogflow2 as Dialogflow_V2 };
