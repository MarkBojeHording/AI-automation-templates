# AI Content Repurposing Engine

## 📋 Overview

An intelligent content repurposing system that automatically transforms long-form content into multiple formats and distributes them across various platforms. Perfect for maximizing content ROI and maintaining consistent brand presence.

## ✨ Features

- **Multi-Format Content Generation**: Converts content into blog posts, social media posts, emails, and more
- **AI-Powered Content Adaptation**: Uses OpenAI to adapt content for different platforms and audiences
- **Automated Distribution**: Publishes content across multiple channels automatically
- **Content Optimization**: Optimizes content for SEO and platform-specific requirements
- **Visual Content Creation**: Generates images and graphics for social media
- **Performance Tracking**: Monitors content performance across platforms
- **Content Calendar Integration**: Schedules content publication automatically

## 🤖 AI Tools Used

- **OpenAI GPT-3.5/GPT-4**: Content adaptation and optimization
- **AI-Powered Content Analysis**: Intelligent content categorization and tagging
- **Smart Content Generation**: Platform-specific content creation
- **Image Generation**: AI-powered visual content creation

## 🛠️ Prerequisites

Before setting up this scenario, ensure you have:

- [ ] Make.com account (paid plan recommended)
- [ ] Dropbox account for content storage
- [ ] OpenAI API key
- [ ] Social media accounts (Twitter, LinkedIn, Facebook, Instagram)
- [ ] Blog/CMS platform (WordPress, Medium, etc.)
- [ ] Email marketing service (Mailchimp, ConvertKit, etc.)
- [ ] Image generation service (DALL-E, Midjourney API, etc.)

## 🚀 Quick Setup

### Step 1: Import Scenario
1. Copy the `AI Content Repurposing Engine.blueprint.json` file content
2. In Make.com, go to "Scenarios" → "Import"
3. Paste the JSON content
4. Click "Import"

### Step 2: Configure Connections
1. Set up connections for:
   - **Dropbox**: Content storage and monitoring
   - **OpenAI**: API key for content processing
   - **Social Media**: Twitter, LinkedIn, Facebook, Instagram
   - **Blog Platform**: WordPress, Medium, etc.
   - **Email Service**: Mailchimp, ConvertKit, etc.
   - **Image Service**: DALL-E, Midjourney, etc.

### Step 3: Customize Settings
- **Content Templates**: Set up platform-specific templates
- **Publishing Schedule**: Configure optimal posting times
- **Content Categories**: Define content types and tags
- **Brand Voice**: Customize AI prompts for your brand

## ⚙️ Configuration Guide

### Module Configuration

#### Dropbox File Monitor
- **Purpose**: Monitors for new content files
- **Settings**: Configure folder path and file types
- **Trigger**: File upload or modification
- **Output**: File content for processing

#### OpenAI Content Processing
- **Purpose**: Analyzes and adapts content for different platforms
- **Model**: GPT-3.5-turbo or GPT-4
- **Prompts**: Platform-specific content adaptation
- **Output**: Multiple content formats

#### Social Media Publishing
- **Purpose**: Publishes content across social platforms
- **Platforms**: Twitter, LinkedIn, Facebook, Instagram
- **Scheduling**: Automated posting with optimal timing
- **Output**: Published posts with engagement tracking

#### Blog/CMS Integration
- **Purpose**: Publishes long-form content to blogs
- **Platforms**: WordPress, Medium, Ghost, etc.
- **SEO**: Automatic SEO optimization
- **Output**: Published articles with metadata

#### Email Marketing
- **Purpose**: Sends content to email subscribers
- **Services**: Mailchimp, ConvertKit, ActiveCampaign
- **Segmentation**: Audience-specific content
- **Output**: Sent emails with open/click tracking

### Environment Variables
```bash
# Required environment variables
DROPBOX_ACCESS_TOKEN=your_dropbox_token
OPENAI_API_KEY=your_openai_api_key
TWITTER_API_KEY=your_twitter_api_key
LINKEDIN_API_KEY=your_linkedin_api_key
FACEBOOK_API_KEY=your_facebook_api_key
WORDPRESS_API_KEY=your_wordpress_api_key
MAILCHIMP_API_KEY=your_mailchimp_api_key
```

## 📖 Usage Examples

### Example 1: Blog Post Repurposing
```json
{
  "original_content": "How to Build a Successful SaaS Business",
  "content_type": "blog_post",
  "word_count": 2500,
  "target_platforms": ["twitter", "linkedin", "facebook", "email"]
}
```

**Expected Output:**
- Twitter thread (8-10 tweets)
- LinkedIn article (500 words)
- Facebook post with image
- Email newsletter section
- Instagram carousel post

### Example 2: Video Content Repurposing
```json
{
  "original_content": "YouTube video transcript",
  "content_type": "video",
  "duration": "15 minutes",
  "target_platforms": ["blog", "twitter", "linkedin"]
}
```

## 🔧 Customization Options

### Modifying Content Templates
1. Open the OpenAI modules
2. Update prompts for each platform
3. Adjust tone and style parameters
4. Test with sample content

### Adding New Platforms
1. Add new publishing modules
2. Configure platform-specific settings
3. Create platform-specific templates
4. Test content publishing

### Customizing Brand Voice
1. Update AI prompts with brand guidelines
2. Set tone and style parameters
3. Add brand-specific keywords
4. Test content output

## 🐛 Troubleshooting

### Common Issues

**Issue 1: Dropbox connection failed**
- **Cause**: Invalid access token or permissions
- **Solution**: Regenerate Dropbox access token

**Issue 2: Content not publishing**
- **Cause**: Platform API limits or authentication
- **Solution**: Check API credentials and rate limits

**Issue 3: AI content quality issues**
- **Cause**: Poor prompts or model parameters
- **Solution**: Refine prompts and adjust temperature

### Debug Tips
- Check Make.com execution logs
- Test individual modules
- Verify all API connections
- Monitor content performance

## 📊 Performance Considerations

- **Execution Time**: 3-8 minutes per content piece
- **Resource Usage**: High (multiple API calls)
- **API Limits**: 
  - OpenAI: Rate limits apply
  - Social Media: Platform-specific limits
  - Dropbox: 600 requests per hour
- **Cost Factors**: 
  - OpenAI: ~$0.05 per content piece
  - Social Media APIs: Usually free
  - Make.com: Scenario execution credits

## 🔗 Related Workflows

- [AI-Powered Client Onboarding](../../business-automation/AI-Powered%20Client%20Onboarding%20Automation%20System/README.md)
- [AI Customer Support Chatbot](../../support-automation/AI%20Customer%20Support%20Chatbot%20with%20Ticket%20Management/README.md)

## 📝 Changelog

### Version 1.0.0
- Initial release
- Multi-platform content repurposing
- AI-powered content adaptation
- Automated distribution system

## 🤝 Contributing

To contribute to this scenario:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with sample content
5. Submit a pull request

## 📄 License

This scenario is part of the AI Automation Templates collection and is available under the [MIT License](../../../LICENSE).

## 📧 Support

For questions or issues with this scenario:
- Create an issue in the repository
- Contact [Mark Hording](mailto:markhording@gmail.com)
- Join the Make.com community forums

---

*Last updated: January 2025*
