# Vapi Insurance Agent with Twilio Integration

A voice-enabled insurance agent built using Vapi (Voice AI Platform) and Twilio for phone call handling. This system allows customers to interact with an AI insurance agent through phone calls to inquire about policies, file claims, and get assistance.

## 🏗️ Architecture Overview

The system consists of:
- **Vapi Agent**: AI-powered voice agent configured for insurance use cases
- **Express.js Server**: Handles Vapi function calls and data processing
- **Twilio Integration**: Provides phone number and call routing
- **Agent Configuration**: Defines the AI agent's behavior and capabilities

## 📁 Project Structure

```
├── server.js                 # Main Express server with function handling
├── route/
│   └── call.js              # Call-related API routes
├── agent/                   # Agent configuration folder
│   └── [agent-config]       # Vapi agent configuration files
└── README.md               # This file
```

## 🚀 How It Works

### 1. Call Flow
1. Agent initiates outbound call to customer's number via API
2. Vapi activates the configured insurance agent
3. Agent processes speech and responds with insurance-related assistance
4. Function calls are sent to your server for data processing

### 2. Function Calls
Currently implemented functions:
- `lookup_order`: Retrieves order/policy information by ID

### 3. Outbound Call API
The system includes an API endpoint to initiate outbound calls:
- `POST /call`: Creates a new outbound call to a customer

## 📋 Prerequisites

- Node.js (v14 or higher)
- Vapi account and API key
- Twilio account with phone number

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vapi-insurance-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file:
   ```env
   VAPI_API_KEY=your_vapi_api_key
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   PHONE_NUMBER_ID=your_vapi_phone_number_id
   ASSISTANT_ID=your_vapi_assistant_id
   PORT=3000
   ```

## 🔧 Configuration

### 1. Agent Configuration
Navigate to the `agent/` folder and configure your Vapi agent:

- Set up the agent's personality and role (insurance specialist)
- Define available functions (lookup_order, file_claim, etc.)
- Configure voice settings and response style
- Set up knowledge base for insurance policies

### 2. Twilio Setup
1. Purchase a phone number in your Twilio console
2. Configure the phone number to work with Vapi
3. Set up call forwarding to Vapi

### 3. Vapi Setup
1. Create a new agent in your Vapi dashboard
2. Upload the agent configuration from the `agent/` folder
3. Configure the function endpoint URL to `https://your-domain.com/api/functions`

## 🚀 Running the Application

### Development Mode

1. **Start the server**
   ```bash
   npm start
   # or
   node server.js
   ```

2. **Deploy to a public server** (Heroku, AWS, etc.)
   The server needs to be publicly accessible for Vapi to send function calls.

### Production Mode

1. **Deploy to your hosting platform** (Heroku, AWS, etc.)
2. **Update function endpoint URLs** to your production domain
3. **Set environment variables** on your hosting platform

## 📞 Testing

**Note**: The system initiates outbound calls to customer numbers. To test the system:

1. **Start the server** and ensure it's publicly accessible
2. **Make a POST request** to initiate a call:
   ```bash
   curl -X POST http://your-domain.com/call \
     -H "Content-Type: application/json" \
     -d '{
       "customerNumber": "+1234567890",
       "phoneNumberId": "your_phone_number_id",
       "assistantId": "your_assistant_id"
     }'
   ```
3. **Answer the call** when your phone rings
4. **Interact with the insurance agent**
   - Ask about policy information
   - Request to look up an order
   - Test various insurance-related queries

5. **Monitor logs**
   ```bash
   # Watch server logs for function calls
   tail -f your-log-file
   ```

## 🔍 Available Functions

### lookup_order
Retrieves order/policy information by ID.

**Parameters:**
- `orderId` (string): The order or policy ID to look up

**Response:**
```json
{
  "result": {
    "orderId": "12345",
    "status": "shipped"
  }
}
```

## 📡 API Endpoints

### POST /call
Initiates an outbound call to a customer.

**Request Body:**
```json
{
  "customerNumber": "+1234567890",
  "phoneNumberId": "your_phone_number_id",
  "assistantId": "your_assistant_id"
}
```

**Response:**
```json
{
  "call": {
    "id": "call_id",
    "status": "queued",
    "customer": {
      "number": "+1234567890"
    }
  }
}
```

**Notes:**
- `phoneNumberId` and `assistantId` are optional if set in environment variables
- All three parameters are required for the call to be initiated

## 🛡️ Security Considerations

- Validate function calls from Vapi
- Implement rate limiting
- Secure sensitive customer data
- Use HTTPS in production
- Implement proper error handling

## 🔧 Customization

### Adding New Functions
1. Add function definition to your Vapi agent configuration
2. Implement the function handler in `handleFunctionCall()`
3. Test the new functionality

### Extending the Agent
- Modify agent configuration in the `agent/` folder
- Add new routes in `route/call.js`
- Implement additional function handlers

## 📊 Monitoring

Monitor your application using:
- Server logs for function calls
- Vapi dashboard for call analytics
- Twilio console for call logs
- Custom logging for function execution

## 🧪 Making Outbound Calls

The system is designed to make outbound calls to customers rather than receiving inbound calls. You can initiate calls programmatically using the `/call` endpoint or integrate it into your existing customer management system.

**Example integration:**
```javascript
// Initiate a call to a customer
const response = await fetch('https://your-domain.com/call', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customerNumber: '+1234567890'
  })
});

const { call } = await response.json();
console.log('Call initiated:', call.id);
```