import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "霸气运行状态",
  links: [
    { link: 'https://tz.121628.xyz', label: '实时状态' },
    { link: 'https://ai.121628.xyz', label: 'AI聚合', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    { id: 'realtime_status', name: '实时状态', method: 'GET', target: 'https://tz.121628.xyz' },
    { id: 'axure_service', name: 'Axure服务', method: 'GET', target: 'http://cloud.121628.xyz' },
    { id: 'cloud_drive', name: '网盘', method: 'GET', target: 'https://drive.121628.xyz' },
    { id: 'ai_aggregate', name: 'AI聚合', method: 'GET', target: 'https://ai.121628.xyz' },
    { id: 'ddns_service', name: 'DDNS', method: 'GET', target: 'http://r2s.121628.xyz:64444' },
  ],
  notification: {
    webhook: {
      url: 'https://open.feishu.cn/open-apis/bot/v2/hook/773e72e4-bb4c-41dd-904a-fb2513ba11d5',
      method: 'POST',
      payloadType: 'json',
      // 飞书卡片模式
      payload: {
        msg_type: 'interactive',
        card: {
          header: {
            title: { tag: 'plain_text', content: '服务状态监控通知' },
            template: 'orange' 
          },
          elements: [
            {
              tag: 'div',
              text: { tag: 'lark_md', content: '**状态更新:**\n$MSG' }
            },
            {
              tag: 'note',
              elements: [{ tag: 'plain_text', content: '来自 CF-UptimeFlare 监控系统' }]
            }
          ]
        }
      },
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 1,
  },
}

const maintenances: MaintenanceConfig[] = []
export { maintenances, pageConfig, workerConfig }
