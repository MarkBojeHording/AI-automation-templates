# Quick Start Guide

## Prerequisites

Before importing any workflows, ensure you have:

1. **n8n Instance**: Self-hosted or n8n Cloud account
2. **OpenAI API Key**: For AI-powered features
3. **Gmail Account**: With API access enabled
4. **Google Sheets API**: For data logging
5. **Airtable Account**: For database operations (optional)

## Step 1: Import Workflows

1. Navigate to your n8n instance
2. Click "Import from File" or use the import URL
3. Select the JSON file from the appropriate workflow directory
4. Click "Import"

## Step 2: Configure Credentials

### OpenAI Credentials
1. Go to Settings → Credentials
2. Add new credential → OpenAI
3. Enter your OpenAI API key
4. Test the connection

### Gmail Credentials
1. Add new credential → Gmail
2. Follow OAuth2 setup process
3. Grant necessary permissions
4. Test the connection

### Google Sheets Credentials
1. Add new credential → Google Sheets
2. Complete OAuth2 authentication
3. Grant spreadsheet access
4. Test the connection

## Step 3: Customize Workflows

### Plumbing Voice Agent
- Update Airtable base ID and table ID
- Modify labor rates for your region
- Adjust GST percentage if needed

### AI Customer Support
- Update Gmail addresses
- Modify Google Sheets ID
- Customize email templates

### Travel Concierge
- Configure travel API credentials
- Update booking system integrations
- Customize travel preferences

## Step 4: Test Workflows

1. Activate the workflow
2. Send test data/webhook
3. Verify all nodes execute successfully
4. Check output data format

## Troubleshooting

### Common Issues

**OpenAI API Errors**
- Verify API key is valid
- Check API usage limits
- Ensure model access permissions

**Gmail Connection Issues**
- Re-authenticate OAuth2
- Check Gmail API quotas
- Verify email permissions

**Google Sheets Errors**
- Confirm sheet sharing permissions
- Check API quotas
- Verify sheet structure

### Getting Help

- Check n8n community forums
- Review workflow execution logs
- Contact support through GitHub issues

## Best Practices

1. **Test in Development**: Always test workflows in a development environment first
2. **Monitor Usage**: Keep track of API usage and costs
3. **Backup Workflows**: Export workflows regularly
4. **Document Changes**: Keep notes of customizations
5. **Security**: Never commit API keys to version control

## Next Steps

- Explore additional workflows in the repository
- Customize workflows for your specific use cases
- Contribute your own workflows to the community
- Join the n8n community for support and inspiration
