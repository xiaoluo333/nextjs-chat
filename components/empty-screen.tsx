import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Healthcare-Agent!
        </h1>
        <p className="leading-normal text-muted-foreground">
          Healthcare-Agent 是一个医疗保健智能体，基于 GenAI 赋能，解读用户的健康密码，根据个性化的数据，生成易懂化的解读，为医疗保健工作者赋能提效，为家庭健康决策人提供全生命周期的健康管理。
        </p>
        <p className="leading-normal text-muted-foreground">
          主要功能：<br/>
          医疗智能问答 AI Health Bot：基于医疗知识的智能问答，有专业溯源依据。<br/>
          报告分析 Healthcare Textract：上传检查报告，AI 自动分析，提供白话解读，原因分析和相关建议。<br/>
          CVD 慢病管理 MMPose：基于人体建模和姿态识别技术，GenAI 加持，助力脑卒中患者的提前发现预防和治疗。
          <a href="https://github.com/CDL0726/Healthcare-Agent/tree/main" className="mt-4">
  了解更多详情，请访问 GitHub 仓库
          </a>
        </p>
      </div>
    </div>
  )
}