'use strict';

import { Dialogflow_V3 } from './js/Dialogflow_V3';


/**
 * DIALOGFLOW V3
 */
var dialogflow3 = new Dialogflow_V3();

dialogflow3.setConfiguration = async function (clientEmail, privateKey, languageTag, projectId, locationId, agentId) {
    dialogflow3.accessToken = await dialogflow2.generateAccessToken(clientEmail, privateKey);
    dialogflow3.languageTag = languageTag;
    dialogflow3.projectId = projectId;
    dialogflow3.sessionId = dialogflow2.sessionId ? dialogflow2.sessionId : dialogflow2.guid();
    dialogflow3.agentId = agentId;
    dialogflow3.locationId = locationId;
    dialog

}

export { dialogflow3 as Dialogflow_V3 };

