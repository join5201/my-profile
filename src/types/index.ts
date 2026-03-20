export interface Log {
  id: number;
  message: string;
  createdAt: Date;
  colorIndex: number; // 생성 시점에 색상 고정
}
