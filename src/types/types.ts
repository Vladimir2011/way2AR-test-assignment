export interface DoctorType {
  id: number
  name: string
  department: string
  isManager: boolean
}

export interface NurseType {
  id: number
  name: string
  department: string
}

export const validateButtonType = (value: string): boolean => {
  return ['submit', 'button', 'reset'].includes(value)
}
