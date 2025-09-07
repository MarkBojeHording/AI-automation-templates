#!/bin/bash

# Script to create individual README files for all n8n workflows
# This script organizes workflows and creates standardized documentation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Base directory
BASE_DIR="/Users/markhording/Desktop/n8n Workflows"
TEMPLATE_DIR="$BASE_DIR/documentation/templates"
WORKFLOWS_DIR="$BASE_DIR/workflows"

echo -e "${BLUE}🚀 Creating individual README files for n8n workflows...${NC}"

# Function to create README for a workflow
create_workflow_readme() {
    local category=$1
    local workflow_name=$2
    local json_file=$3
    local description=$4
    
    echo -e "${YELLOW}📝 Creating README for: $workflow_name${NC}"
    
    # Create directory if it doesn't exist
    local workflow_dir="$WORKFLOWS_DIR/$category/$workflow_name"
    mkdir -p "$workflow_dir/screenshots"
    
    # Move JSON file to the workflow directory
    if [ -f "$WORKFLOWS_DIR/$category/$json_file" ]; then
        mv "$WORKFLOWS_DIR/$category/$json_file" "$workflow_dir/"
        echo -e "${GREEN}✅ Moved $json_file to $workflow_dir/${NC}"
    fi
    
    # Create README.md
    cat > "$workflow_dir/README.md" << EOF
# $workflow_name

## 📋 Overview

$description

## ✨ Features

- **Feature 1**: Description of feature
- **Feature 2**: Description of feature
- **Feature 3**: Description of feature

## 🤖 AI Tools Used

- **Tool Name**: Purpose and function
- **Tool Name**: Purpose and function

## 🛠️ Prerequisites

Before setting up this workflow, ensure you have:

- [ ] n8n instance (self-hosted or cloud)
- [ ] Required API credentials
- [ ] Necessary permissions and access
- [ ] Required software/services

## 🚀 Quick Setup

### Step 1: Import Workflow
1. Copy the JSON file content
2. In n8n, go to "Import from File"
3. Paste the JSON content
4. Click "Import"

### Step 2: Configure Credentials
1. Go to Settings → Credentials
2. Add required credentials
3. Test connections

### Step 3: Customize Settings
- Update configuration as needed
- Test the workflow
- Activate when ready

## ⚙️ Configuration Guide

### Node Configuration

*Detailed configuration instructions will be added here*

## 📖 Usage Examples

*Usage examples will be added here*

## 🔧 Customization Options

*Customization options will be added here*

## 🐛 Troubleshooting

### Common Issues

*Troubleshooting information will be added here*

## 📊 Performance Considerations

*Performance information will be added here*

## 🔗 Related Workflows

*Links to related workflows will be added here*

## 📝 Changelog

### Version 1.0.0
- Initial release
- Core functionality implemented

## 🤝 Contributing

To contribute to this workflow:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
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
EOF

    echo -e "${GREEN}✅ Created README for $workflow_name${NC}"
}

# Function to create setup guide
create_setup_guide() {
    local category=$1
    local workflow_name=$2
    
    local workflow_dir="$WORKFLOWS_DIR/$category/$workflow_name"
    
    cat > "$workflow_dir/setup.md" << EOF
# Setup Guide: $workflow_name

## Prerequisites

*Prerequisites will be detailed here*

## Step-by-Step Setup

1. **Import the workflow**
2. **Configure credentials**
3. **Customize settings**
4. **Test the workflow**
5. **Activate when ready**

## Configuration Details

*Detailed configuration steps will be added here*

## Testing

*Testing procedures will be added here*

## Troubleshooting

*Common setup issues and solutions will be added here*
EOF

    echo -e "${GREEN}✅ Created setup guide for $workflow_name${NC}"
}

# Process workflows manually
echo -e "${YELLOW}📝 Processing Business Automation workflows...${NC}"
create_workflow_readme "business-automation" "ai-customer-support" "AI Customer Support Agent.json" "Intelligent email support automation with smart routing"
create_setup_guide "business-automation" "ai-customer-support"

echo -e "${YELLOW}📝 Processing Content Automation workflows...${NC}"
create_workflow_readme "content-automation" "ai-diagram-generator" "AI Diagram Generator.json" "Automated diagram creation from text descriptions"
create_setup_guide "content-automation" "ai-diagram-generator"

echo -e "${YELLOW}📝 Processing Support Automation workflows...${NC}"
create_workflow_readme "support-automation" "ai-helpdesk" "AI Helpdesk.json" "AI-powered customer support automation"
create_setup_guide "support-automation" "ai-helpdesk"

create_workflow_readme "support-automation" "ai-support" "AI Support.json" "General AI support workflow"
create_setup_guide "support-automation" "ai-support"

echo -e "${YELLOW}📝 Processing Travel Automation workflows...${NC}"
create_workflow_readme "travel-automation" "ai-travel-concierge" "AI Travel Concierge.json" "Automated travel planning and booking assistance"
create_setup_guide "travel-automation" "ai-travel-concierge"

create_workflow_readme "travel-automation" "travel-automation-workflow" "Travel Concierge Automation Workflow.json" "Main travel automation workflow"
create_setup_guide "travel-automation" "travel-automation-workflow"

create_workflow_readme "travel-automation" "travel-data-ingestion" "Travel Concierge Data Ingestion.json" "Travel data processing pipeline"
create_setup_guide "travel-automation" "travel-data-ingestion"

create_workflow_readme "travel-automation" "travel-enrichment" "Travel Concierge Enrichment Flow Steps.json" "Data enrichment and optimization"
create_setup_guide "travel-automation" "travel-enrichment"

echo -e "${GREEN}🎉 Successfully created README files for all workflows!${NC}"
echo -e "${BLUE}📁 Workflows are now organized in individual directories with documentation${NC}"

# Create index file
cat > "$WORKFLOWS_DIR/README.md" << EOF
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
EOF

echo -e "${GREEN}✅ Updated workflows directory README${NC}"
echo -e "${BLUE}🎯 All workflows now have individual documentation!${NC}"
