# n8n Workflows Directory

This directory contains all the n8n automation workflows organized by category with individual documentation.

## 📁 Directory Structure

### Business Automation
- [Plumbing Voice Agent](business-automation/plumbing-voice-agent/README.md) - AI-powered voice-to-invoice automation
- [AI Customer Support Agent](business-automation/ai-customer-support/README.md) - Intelligent email support with smart routing

### Travel Automation
- [AI Travel Concierge](travel-automation/ai-travel-concierge/README.md) - Automated travel planning and booking
- [Travel Automation Workflow](travel-automation/travel-automation-workflow/README.md) - Main travel automation workflow
- [Travel Data Ingestion](travel-automation/travel-data-ingestion/README.md) - Travel data processing pipeline
- [Travel Enrichment](travel-automation/travel-enrichment/README.md) - Data enrichment and optimization

### Content Automation
- [AI Diagram Generator](content-automation/ai-diagram-generator/README.md) - Automated diagram creation from text

### Support Automation
- [AI Helpdesk](support-automation/ai-helpdesk/README.md) - Customer support automation
- [AI Support](support-automation/ai-support/README.md) - General support workflow

## 🚀 Quick Import

1. Navigate to the desired workflow directory
2. Copy the JSON file content
3. In n8n, go to "Import from File"
4. Paste the JSON content
5. Follow the setup guide in the README

## 📋 Workflow Requirements

Each workflow may require different credentials and setup:

- **OpenAI API**: Required for AI-powered features
- **Gmail API**: Required for email automation
- **Google Sheets API**: Required for data logging
- **Airtable API**: Required for database operations
- **Webhook URLs**: Required for external integrations

## 🔧 Customization

Workflows can be customized by:
- Modifying node parameters
- Updating API endpoints
- Changing data formats
- Adjusting automation triggers
- Customizing response templates

## 📊 Usage Statistics

Track your workflow performance:
- Execution frequency
- Success/failure rates
- Processing times
- Resource usage
- Cost analysis

## 🤝 Contributing

To add a new workflow:
1. Create a descriptive filename
2. Include comprehensive documentation
3. Test thoroughly before submission
4. Follow the existing naming conventions
5. Update this README with your addition
