import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "服务运行状态",
  links: [
    { link: 'https://tz.121628.xyz', label: '实时状态' },
    { link: 'https://ai.121628.xyz', label: 'AI聚合', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    { 
      id: 'realtime_status', 
      name: '实时状态', 
      method: 'GET', 
      target: 'https://tz.121628.xyz',
      checkProxy: 'globalping://gkvf355povkimujfrpygsln4khrnsqow/?magic=CN' 
    },
    { 
      id: 'axure_service', 
      name: 'Axure服务', 
      method: 'GET', 
      target: 'http://cloud.121628.xyz',
      expectedCodes: [200, 301, 302],  
      timeout: 20000,
      checkProxy: 'globalping://gkvf355povkimujfrpygsln4khrnsqow/?magic=CN'
    },
    { 
      id: 'cloud_drive', 
      name: '网盘', 
      method: 'GET', 
      target: 'https://drive.121628.xyz',
      checkProxy: 'globalping://gkvf355povkimujfrpygsln4khrnsqow/?magic=CN'
    },
    { 
      id: 'ai_aggregate', 
      name: 'AI聚合', 
      method: 'GET', 
      target: 'https://ai.121628.xyz',
      checkProxy: 'globalping://gkvf355povkimujfrpygsln4khrnsqow/?magic=CN'
    },
    { 
      id: 'ddns_service', 
      name: 'DDNS', 
      method: 'GET', 
      target: 'http://r2s.121628.xyz:64444',
      checkProxy: 'globalping://gkvf355povkimujfrpygsln4khrnsqow/?magic=CN'
    },
  ],
  notification: {
    webhook: {
      url: 'https://open.feishu.cn/open-apis/bot/v2/hook/773e72e4-bb4c-41dd-904a-fb2513ba11d5',
      method: 'POST',
      payloadType: 'json',
      payload: {
        msg_type: 'interactive',
        card: {
          config: {
            wide_screen_mode: true
          },
          header: {
            title: { tag: 'plain_text', content: '🚨 监控告警' },
            template: 'red'
          },
          elements: [
            {
              tag: 'div',
              text: { 
                tag: 'lark_md', 
                content: '**详细信息：**\n$MSG' 
              }
            },
            {
              tag: 'hr'
            },
            {
              tag: 'div',
              fields: [
                {
                  is_short: true,
                  text: { tag: 'lark_md', content: '**时间：**\n$TIME' }
                },
                {
                  is_short: true,
                  text: { tag: 'lark_md', content: '**检测节点：**\nGlobalping (CN)' }
                }
              ]
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
