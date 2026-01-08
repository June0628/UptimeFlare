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
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
