# Plumbing Voice Agent

## 📋 Overview

An AI-powered voice-to-invoice automation system designed specifically for plumbing businesses. This workflow converts voice recordings into structured invoice data, automatically calculating costs, labor hours, and Australian GST.

## ✨ Features

- **Voice-to-Text Conversion**: Converts audio recordings to text using OpenAI Whisper
- **Intelligent Data Extraction**: Uses GPT-4 to extract structured invoice data from transcriptions
- **Automatic Calculations**: Calculates labor costs, materials costs, and 10% Australian GST
- **Database Integration**: Stores all data in Airtable for easy management
- **Webhook Response**: Returns structured JSON response with all extracted data

## 🤖 AI Tools Used

- **OpenAI Whisper**: Converts voice recordings to text transcription
- **OpenAI GPT-4**: Extracts structured invoice data from transcriptions
- **AI-Powered Calculations**: Automatic GST, labor costs, and total amount calculations

## 🛠️ Prerequisites

Before setting up this workflow, ensure you have:

- [ ] n8n instance (self-hosted or cloud)
- [ ] OpenAI API key with access to GPT-4 and Whisper
- [ ] Airtable account and base setup
- [ ] Webhook endpoint for receiving voice recordings

## 🚀 Quick Setup

### Step 1: Import Workflow
1. Copy the `Plumbing Voice Agent.json` file content
2. In n8n, go to "Import from File"
3. Paste the JSON content
4. Click "Import"

### Step 2: Configure Credentials
1. Go to Settings → Credentials
2. Add required credentials:
   - **OpenAI API**: Your OpenAI API key
   - **Airtable**: Your Airtable personal access token

### Step 3: Customize Settings
- **Airtable Base ID**: Update with your Airtable base ID
- **Airtable Table ID**: Update with your table ID
- **Labor Rate**: Default is $85/hour (customize for your region)
- **GST Rate**: Default is 10% (Australian standard)

## ⚙️ Configuration Guide

### Node Configuration

#### Webhook Trigger
- **Purpose**: Receives voice recordings via POST request
- **Settings**: Configure webhook URL and response mode
- **Input**: Audio data in base64 format
- **Output**: Raw webhook data

#### Process Audio Input
- **Purpose**: Converts base64 audio to binary format
- **Settings**: No configuration needed
- **Input**: Base64 encoded audio data
- **Output**: Binary audio file (webm format)

#### Convert Speech To Text
- **Purpose**: Transcribes audio using OpenAI Whisper
- **Settings**: Uses OpenAI Whisper API
- **Input**: Audio file (webm format)
- **Output**: Transcribed text

#### Extract Invoice Data
- **Purpose**: Uses GPT-4 to extract structured data
- **Settings**:
  - Model: GPT-4
  - Temperature: 0.1 (for consistent results)
  - Custom prompt for plumbing data extraction
- **Input**: Transcribed text
- **Output**: Structured JSON with invoice data

#### Save To Airtable
- **Purpose**: Stores extracted data in Airtable
- **Settings**: Configure base ID, table ID, and field mappings
- **Input**: Structured invoice data
- **Output**: Confirmation of saved record

### Environment Variables
```bash
# Required environment variables
OPENAI_API_KEY=your_openai_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_ID=your_airtable_table_id
```

## 📖 Usage Examples

### Example 1: Basic Invoice Creation
```json
{
  "audio": "base64_encoded_audio_data",
  "document_type": "invoice"
}
```

**Expected Output:**
```json
{
  "success": true,
  "data": {
    "customer_name": "John Smith",
    "job_description": "Fixed leaking kitchen faucet",
    "materials_cost": 45.00,
    "labor_hours": 2.5,
    "labor_cost": 212.50,
    "subtotal": 257.50,
    "gst_amount": 25.75,
    "total_amount": 283.25
  }
}
```

### Example 2: Quote Request
```json
{
  "audio": "base64_encoded_audio_data",
  "document_type": "quote"
}
```

## 🔧 Customization Options

### Modifying Labor Rates
1. Open the "Extract Invoice Data" node
2. Find the labor rate calculation section
3. Update the default rate (currently $85/hour)
4. Save and test the workflow

### Adding New Document Types
1. Update the GPT-4 prompt in "Extract Invoice Data"
2. Add new document types to the Airtable schema
3. Update the response template

### Changing GST Rate
1. Modify the GST calculation in "Extract Invoice Data"
2. Update from 0.10 (10%) to your required rate
3. Test with sample data

## 🐛 Troubleshooting

### Common Issues

**Issue 1: "No audio data found"**
- **Cause**: Audio data not properly encoded or missing
- **Solution**: Ensure audio is base64 encoded and included in request body

**Issue 2: "No transcribed text found"**
- **Cause**: Whisper API failed to transcribe audio
- **Solution**: Check audio quality, format, and OpenAI API key

**Issue 3: Airtable connection failed**
- **Cause**: Invalid credentials or base/table IDs
- **Solution**: Verify Airtable credentials and IDs

### Debug Tips
- Check execution logs in n8n for detailed error messages
- Test audio transcription separately using OpenAI's API
- Verify Airtable permissions and table structure
- Check OpenAI API usage limits and quotas

## 📊 Performance Considerations

- **Execution Time**: 10-30 seconds depending on audio length
- **Resource Usage**: Moderate (API calls to OpenAI and Airtable)
- **API Limits**:
  - OpenAI Whisper: 25MB file size limit
  - OpenAI GPT-4: Rate limits apply
  - Airtable: 5 requests per second limit
- **Cost Factors**:
  - Whisper: $0.006 per minute of audio
  - GPT-4: ~$0.03 per request
  - Airtable: Free tier available

## 🔗 Related Workflows

- [AI Customer Support Agent](../ai-customer-support/README.md)
- [Travel Concierge Automation](../../travel-automation/ai-travel-concierge/README.md)

## 📝 Changelog

### Version 1.0.0
- Initial release
- Voice-to-invoice conversion
- Australian GST calculations
- Airtable integration

## 🤝 Contributing

To contribute to this workflow:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with sample audio files
5. Submit a pull request

## 📄 License

This workflow is part of the n8n Automation Templates collection and is available under the [MIT License](../../../LICENSE).

## 📧 Support

For questions or issues with this workflow:
- Create an issue in the repository
- Contact [Mark Hording](mailto:markhording@gmail.com)
- Join the n8n community forums

---

*Last updated: January 2025*


