'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

// Login schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

// Signup schema
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type LoginForm = z.infer<typeof loginSchema>
type SignupForm = z.infer<typeof signupSchema>

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: 'login' | 'signup'
}

type TabValue = 'login' | 'signup';

export function AuthModal({ isOpen, onClose, defaultTab = 'login' as TabValue }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<TabValue>(defaultTab)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Login form
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  // Signup form
  const signupForm = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  const onLoginSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      console.log('Login data:', data)
    }, 1000)
  }

  const onSignupSubmit = async (data: SignupForm) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      console.log('Signup data:', data)
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[500px]">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/images/logo.png"
                alt="RK Visa Solutions Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to RK Visa Solutions
            </DialogTitle>
          </DialogHeader>

          <div className="p-6">
            <Tabs 
              value={activeTab} 
              onValueChange={(value: string) => setActiveTab(value as TabValue)} 
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="font-medium">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="font-medium">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-11"
                          {...loginForm.register('email')}
                        />
                      </div>
                      {loginForm.formState.errors.email && (
                        <p className="text-sm text-red-500">{loginForm.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 h-11"
                          {...loginForm.register('password')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                      {loginForm.formState.errors.password && (
                        <p className="text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <button type="button" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Signing in...</span>
                        </div>
                      ) : (
                        'Sign In'
                      )}
                    </Button>
                  </form>
                </motion.div>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="space-y-4 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10 h-11"
                          {...signupForm.register('name')}
                        />
                      </div>
                      {signupForm.formState.errors.name && (
                        <p className="text-sm text-red-500">{signupForm.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-11"
                          {...signupForm.register('email')}
                        />
                      </div>
                      {signupForm.formState.errors.email && (
                        <p className="text-sm text-red-500">{signupForm.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signup-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10 h-11"
                          {...signupForm.register('phone')}
                        />
                      </div>
                      {signupForm.formState.errors.phone && (
                        <p className="text-sm text-red-500">{signupForm.formState.errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signup-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a password"
                          className="pl-10 pr-10 h-11"
                          {...signupForm.register('password')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                      {signupForm.formState.errors.password && (
                        <p className="text-sm text-red-500">{signupForm.formState.errors.password.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password" className="text-sm font-medium text-gray-700">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signup-confirm-password"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 h-11"
                          {...signupForm.register('confirmPassword')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                      {signupForm.formState.errors.confirmPassword && (
                        <p className="text-sm text-red-500">{signupForm.formState.errors.confirmPassword.message}</p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2 text-sm">
                      <input
                        type="checkbox"
                        className="mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        required
                      />
                      <span className="text-gray-600">
                        I agree to the{' '}
                        <button type="button" className="text-purple-600 hover:text-purple-800 transition-colors">
                          Terms of Service
                        </button>{' '}
                        and{' '}
                        <button type="button" className="text-purple-600 hover:text-purple-800 transition-colors">
                          Privacy Policy
                        </button>
                      </span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Creating account...</span>
                        </div>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </form>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 