# n8n Automation Templates Portfolio

A comprehensive collection of AI-powered automation workflows built with n8n, showcasing various business use cases and AI integrations.

## 🚀 Featured Workflows

### 1. **Plumbing Voice Agent**
*AI-powered voice-to-invoice automation for plumbing businesses*

**Features:**
- Voice recording to text transcription using OpenAI Whisper
- Intelligent data extraction with GPT-4
- Automatic GST calculations for Australian businesses
- Airtable integration for data storage

**AI Tools Used:**
- OpenAI Whisper (Speech-to-Text)
- OpenAI GPT-4 (Data Extraction)
- AI-Powered Calculations (GST, labor costs)

---

### 2. **AI Customer Support Agent**
*Intelligent email support automation with smart routing*

**Features:**
- Gmail integration for email monitoring
- AI-powered email categorization
- Automatic escalation to human agents
- Google Sheets logging and audit trails
- Customer feedback collection

**AI Tools Used:**
- OpenAI GPT-4o (Email Analysis)
- AI-Powered Decision Making
- Gmail Integration
- Google Sheets Integration

---

### 3. **AI Travel Concierge**
*Automated travel planning and booking assistance*

**Features:**
- Travel data ingestion and processing
- AI-powered travel recommendations
- Automated booking workflows
- Travel enrichment and optimization

**AI Tools Used:**
- AI Travel Planning
- Data Enrichment Algorithms
- Automated Booking Systems

---

### 4. **AI Diagram Generator**
*Automated diagram creation from text descriptions*

**Features:**
- Text-to-diagram conversion
- Multiple diagram types support
- Automated formatting and styling

**AI Tools Used:**
- AI Diagram Generation
- Natural Language Processing

---

## 🛠️ Technology Stack

- **n8n**: Workflow automation platform
- **OpenAI**: GPT-4, GPT-4o, Whisper for AI capabilities
- **Gmail API**: Email automation
- **Google Sheets**: Data logging and tracking
- **Airtable**: Database management
- **Webhooks**: Real-time data processing

## 📁 Repository Structure

```
n8n-automation-templates/
├── README.md
├── workflows/
│   ├── business-automation/
│   │   ├── Plumbing Voice Agent.json
│   │   └── AI Customer Support Agent.json
│   ├── travel-automation/
│   │   ├── AI Travel Concierge.json
│   │   ├── Travel Concierge Automation Workflow.json
│   │   ├── Travel Concierge Data Ingestion.json
│   │   └── Travel Concierge Enrichment Flow Steps.json
│   ├── content-automation/
│   │   └── AI Diagram Generator.json
│   └── support-automation/
│       ├── AI Helpdesk.json
│       └── AI Support.json
└── documentation/
    └── setup-guides/
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MarkBojeHording/n8n-automation-templates.git
   ```

2. **Import workflows to n8n:**
   - Copy the JSON files from the workflows directory
   - Import them into your n8n instance
   - Configure credentials and API keys

3. **Configure credentials:**
   - OpenAI API key for AI features
   - Gmail credentials for email automation
   - Google Sheets credentials for data logging
   - Airtable credentials for database operations

## 🔧 Prerequisites

- n8n instance (self-hosted or cloud)
- OpenAI API key
- Gmail account with API access
- Google Sheets API access
- Airtable account (for applicable workflows)

## 📊 Use Cases

### Business Automation
- **Voice-to-Invoice**: Convert voice recordings to structured invoices
- **Customer Support**: Automated email handling and routing
- **Data Processing**: Extract and structure data from various sources

### Travel & Hospitality
- **Travel Planning**: AI-powered itinerary creation
- **Booking Automation**: Streamlined reservation processes
- **Data Enrichment**: Enhanced travel information processing

### Content Creation
- **Diagram Generation**: Automated visual content creation
- **Document Processing**: AI-powered content analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your n8n workflow
4. Update documentation
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [n8n Documentation](https://docs.n8n.io/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [n8n Community](https://community.n8n.io/)

## 📧 Contact

For questions or collaboration opportunities, please reach out through GitHub issues or contact [Mark Hording](mailto:markhording@gmail.com).

---

*Last updated: January 2025*
