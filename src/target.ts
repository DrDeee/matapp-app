import { phone } from 'phone'

export const matrixIdRegex = /^@[A-Z0-9._=-]+:[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const telegramRegex = /^@[A-Z0-9]{1}[A-Z0-9_]{3,}[A-Z0-9]{1}$/i
export const discordRegex = /^[1-9]{1}[0-9]{16,17}$/

export const validators: { [key: string]: any } = {
  phone: (data: string) => {
    return data === '' || phone(data, { country: 'DE' }).isValid
  },
  discord: (data: string) => {
    return data === '' || discordRegex.test(data)
  },
  matrix: (data: string) => {
    return data === '' || matrixIdRegex.test(data)
  },
  telegram: (data: string) => {
    return data === '' || telegramRegex.test(data)
  },
  localGroup: () => {
    return true
  },
}

export const dataGetter: { [key: string]: any } = {
  phone: (data: string) => {
    return phone(data, { country: 'DE' }).phoneNumber || undefined
  },
  discord: (data: string) => {
    return data || undefined
  },
  matrix: (data: string) => {
    return data || undefined
  },
  telegram: (data: string) => {
    return data || undefined
  },
  localGroup: (data: string) => {
    return data || undefined
  },
}

export const fieldNames: { [key: string]: string } = {
  phone: 'phoneNumber',
  discord: 'discord',
  matrix: 'matrix',
  telegram: 'telegram',
  localGroup: 'localGroup',
}
