import { defineStore } from 'pinia'
import mockData from '../mock/mockData.json'
import type { DoctorType, NurseType } from '../types/types.ts'

// Интерфейс для хранилища
interface DoctorsAndNursesStore {
  doctors: DoctorType[]
  nurses: NurseType[]
}

export const useDoctorsAndNursesStore = defineStore('doctorsAndNursesStore', {
  state: (): DoctorsAndNursesStore => ({
    doctors: [],
    nurses: [],
  }),
  actions: {
    loadMockData() {
      this.doctors = mockData.doctors.map((doctor) => ({
        ...doctor,
        isManager: doctor.isManager === 'true',
      }))

      this.nurses = mockData.nurses
    },
    deleteDoctor(id: number) {
      this.doctors = this.doctors.filter((doctor) => doctor.id !== id)
    },
    deleteNurse(id: number) {
      this.nurses = this.nurses.filter((nurse) => nurse.id !== id)
    },
    addDoctor(fullName: string, department: string) {
      this.doctors.push({
        id: this.doctors.length + 1,
        name: fullName,
        department,
        isManager: false,
      })
    },
    addNurse(fullName: string, department: string) {
      this.nurses.push({
        id: this.nurses.length + 1,
        name: fullName,
        department,
      })
    },
    updateNurse(fullName: string, department: string, selectedNurseId: number) {
      const index = this.nurses.findIndex((nurse) => nurse.id === selectedNurseId)
      if (index !== -1) {
        this.nurses[index] = {
          ...this.nurses[index],
          name: fullName,
          department: department,
        }
      }
    },
    updateDoctor(fullName: string, department: string, selectedDoctorId: number) {
      const index = this.doctors.findIndex((nurse) => nurse.id === selectedDoctorId)
      if (index !== -1) {
        this.doctors[index] = {
          ...this.doctors[index],
          name: fullName,
          department: department,
        }
      }
    },
  },
  getters: {
    getDoctors: (state) => state.doctors as DoctorType[],
    getNurses: (state) => state.nurses as NurseType[],
  },
})
