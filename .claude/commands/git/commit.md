---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
argument-hint: [message]
description: create git commit
model: claude-sonnet-4-20250514
---
커밋 메세지: $ARGUMENTS
현재 변경사항 커밋을 생성해주세요:
