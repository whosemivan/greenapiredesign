import type { BundledLanguage } from 'shiki';
import { SITE_URL } from './links';

export type CodeSampleListItemType = {
	// id используется как имя слота Astro, поэтому только латиница
	id: string;
	label: string;
	language: BundledLanguage;
	docsHref: string;
	code: string;
};

export const CODE_SAMPLES_LIST: CodeSampleListItemType[] = [
	{
		id: 'python',
		label: 'Python',
		language: 'python',
		docsHref: `${SITE_URL}/docs/sdk/python/pythonClient/`,
		code: `# pip install whatsapp-api-client-python
from whatsapp_api_client_python import API

greenAPI = API.GreenAPI(
    "1101000001", "d75b3a66374942c5b3c019c698abc2067e151558acbd412345"
)

response = greenAPI.sending.sendMessage("79876543210@c.us", "Message text")

print(response.data)`,
	},
	{
		id: 'nodejs',
		label: 'Node.js',
		language: 'javascript',
		docsHref: `${SITE_URL}/docs/sdk/nodejs/client-v2/`,
		code: `// npm install @green-api/whatsapp-api-client-js-v2
import { GreenApiClient } from '@green-api/whatsapp-api-client-js-v2';

const client = new GreenApiClient({
    idInstance: 1101000001,
    apiTokenInstance: 'd75b3a66374942c5b3c019c698abc2067e151558acbd412345',
});

const response = await client.sendMessage({
    chatId: '79876543210@c.us',
    message: 'Message text',
});

console.log(response.idMessage);`,
	},
	{
		id: 'php',
		label: 'PHP',
		language: 'php',
		docsHref: `${SITE_URL}/docs/sdk/php/phpClient/`,
		code: `<?php
// composer require green-api/whatsapp-api-client-php
require './vendor/autoload.php';

use GreenApi\\RestApi\\GreenApiClient;

define("ID_INSTANCE", "1101000001");
define("API_TOKEN_INSTANCE", "d75b3a66374942c5b3c019c698abc2067e151558acbd412345");

$greenApi = new GreenApiClient(ID_INSTANCE, API_TOKEN_INSTANCE);

$result = $greenApi->sending->sendMessage('79876543210@c.us', 'Message text');

print_r($result->data);`,
	},
	{
		id: 'go',
		label: 'Go',
		language: 'go',
		docsHref: `${SITE_URL}/docs/sdk/golang/client_2.0/`,
		code: `// go get github.com/green-api/whatsapp-api-client-golang-v2
package main

import (
    "fmt"

    greenapi "github.com/green-api/whatsapp-api-client-golang-v2"
)

func main() {
    GreenAPI := greenapi.GreenAPI{
        APIURL:           "https://api.green-api.com",
        MediaURL:         "https://media.green-api.com",
        IDInstance:       "1101000001",
        APITokenInstance: "d75b3a66374942c5b3c019c698abc2067e151558acbd412345",
    }

    response, _ := GreenAPI.Sending().SendMessage(
        "79876543210@c.us",
        "Message text",
    )

    fmt.Println(string(response.Body))
}`,
	},
	{
		id: 'enterprise1c',
		label: '1С:Предприятие',
		language: 'bsl',
		docsHref: `${SITE_URL}/docs/sdk/1c/client/`,
		code: `// Обработка GreenAPI.epf, встроенная в конфигурацию
АПИ = Обработки.GreenAPI.Создать();
АПИ.IdInstance = "1101000001";
АПИ.ApiToken = "d75b3a66374942c5b3c019c698abc2067e151558acbd412345";

Ответ = АПИ.ОтправитьТекст("79876543210", "Message text");`,
	},
	{
		id: 'java',
		label: 'Java',
		language: 'java',
		docsHref: `${SITE_URL}/docs/sdk/java/client/`,
		code: `// Maven: com.green-api:whatsapp-api-client-java
import com.greenapi.client.pkg.api.GreenApi;
import com.greenapi.client.pkg.models.request.OutgoingMessage;
import org.springframework.boot.web.client.RestTemplateBuilder;

var restTemplate = new RestTemplateBuilder().build();

var greenApi = new GreenApi(
    restTemplate,
    "https://media.green-api.com",
    "https://api.green-api.com",
    "1101000001",
    "d75b3a66374942c5b3c019c698abc2067e151558acbd412345");

var message = greenApi.sending.sendMessage(
    OutgoingMessage.builder()
        .chatId("79876543210@c.us")
        .message("Message text")
        .build());

System.out.println(message.getBody().getIdMessage());`,
	},
	{
		id: 'cpp',
		label: 'C++',
		language: 'cpp',
		docsHref: `${SITE_URL}/docs/sdk/cpp/client/`,
		code: `#include "greenapi.hpp"

int main() {
    greenapi::GreenApi instance{
        "https://api.green-api.com",
        "https://media.green-api.com",
        "1101000001",
        "d75b3a66374942c5b3c019c698abc2067e151558acbd412345"
    };

    nlohmann::json sendMessageJson{
        { "chatId", "79876543210@c.us" },
        { "message", "Message text" }
    };

    greenapi::Response sendMessage = instance.sending.sendMessage(sendMessageJson);

    if (sendMessage.error) {
        std::cout << "sendMessage error: " << sendMessage.bodyStr << std::endl;
    } else {
        std::cout << "idMessage: " << sendMessage.bodyJson["idMessage"] << std::endl;
    }
}`,
	},
	{
		id: 'javascript',
		label: 'JS',
		language: 'javascript',
		docsHref: `${SITE_URL}/docs/api/sending/SendMessage/`,
		code: `// REST API без библиотек: fetch работает в браузере и Node.js 18+
const apiUrl = 'https://api.green-api.com';
const idInstance = '1101000001';
const apiTokenInstance = 'd75b3a66374942c5b3c019c698abc2067e151558acbd412345';

const response = await fetch(\`\${apiUrl}/waInstance\${idInstance}/sendMessage/\${apiTokenInstance}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        chatId: '79876543210@c.us',
        message: 'Message text',
    }),
});

const { idMessage } = await response.json();
console.log(idMessage);`,
	},
];
