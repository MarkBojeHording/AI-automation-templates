# Security Guidelines

## 🚨 **CRITICAL: Never Commit Sensitive Data**

This repository contains automation templates that may reference sensitive information. **NEVER commit actual API keys, tokens, webhooks, or credentials to version control.**

## 🛡️ **Security Best Practices**

### **1. Environment Variables**
Use environment variables for all sensitive data:

```bash
# Good ✅
OPENAI_API_KEY=your_actual_api_key_here
SLACK_WEBHOOK_URL=your_actual_webhook_url_here

# Bad ❌
OPENAI_API_KEY=sk-1234567890abcdef...
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/ABC123/DEF456/GHI789
```

### **2. Template Files**
All workflow files should use placeholder values:

```json
{
  "url": "https://hooks.slack.com/services/YOUR_SLACK_WEBHOOK_URL",
  "api_key": "YOUR_API_KEY_HERE",
  "webhook": "YOUR_WEBHOOK_URL_HERE"
}
```

### **3. Documentation**
Documentation should show example values, not real credentials:

```markdown
## Environment Variables
```bash
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```
```

## 🔍 **What to Look For**

### **Sensitive Data Patterns:**
- API keys: `sk-`, `pk_`, `xoxb-`, `xoxp-`, `xoxa-`, `xoxr-`
- Webhook URLs: `https://hooks.slack.com/`, `https://api.`
- Tokens: `Bearer`, `Authorization`
- Passwords: `password`, `secret`, `token`

### **File Types to Check:**
- `.json` files (workflows, blueprints)
- `.env` files
- Configuration files
- Documentation with examples

## 🚨 **If You Find Exposed Credentials**

### **Immediate Actions:**
1. **Revoke/Regenerate** the exposed credentials immediately
2. **Remove** sensitive data from the repository
3. **Update** the .gitignore file
4. **Force push** to remove from git history if needed
5. **Notify** team members to update their local copies

### **Git History Cleanup:**
If sensitive data was committed to git history:

```bash
# Remove file from git history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch path/to/sensitive/file' \
  --prune-empty --tag-name-filter cat -- --all

# Force push to remote
git push origin --force --all
```

## 📋 **Pre-commit Checklist**

Before committing any changes:

- [ ] No actual API keys or tokens in files
- [ ] No real webhook URLs
- [ ] No passwords or secrets
- [ ] All sensitive data uses placeholder values
- [ ] Documentation shows examples, not real credentials
- [ ] .gitignore is updated for new file types

## 🔧 **Tools for Security Scanning**

### **GitGuardian Integration:**
- Set up GitGuardian to scan for secrets
- Configure alerts for exposed credentials
- Review and resolve security alerts

### **Local Scanning:**
```bash
# Install git-secrets
git secrets --install
git secrets --register-aws
git secrets --scan

# Or use truffleHog
pip install truffleHog
truffleHog --regex --entropy=False .
```

## 📞 **Security Contact**

If you discover a security vulnerability:
1. **DO NOT** create a public issue
2. Email: [Mark Hording](mailto:markhording@gmail.com)
3. Include details about the vulnerability
4. Wait for response before public disclosure

## 📚 **Additional Resources**

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [OWASP Secrets Management](https://owasp.org/www-project-secrets-management/)
- [GitGuardian Documentation](https://docs.gitguardian.com/)

---

**Remember: Security is everyone's responsibility. When in doubt, ask before committing sensitive data.**
