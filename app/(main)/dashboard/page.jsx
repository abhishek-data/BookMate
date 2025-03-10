"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateUsername } from "@/actions/users";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { usernameSchema } from "@/app/lib/validators";
import { getLatestUpdates } from "@/actions/dashboard";
import { format } from "date-fns";
import { Calendar, Clock, User, Link, Copy, Check, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usernameSchema),
  });

  const usernameValue = watch("username", "");

  useEffect(() => {
    setValue("username", user?.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  const {
    loading: loadingUpdates,
    data: upcomingMeetings,
    fn: fnUpdates,
  } = useFetch(getLatestUpdates);

  useEffect(() => {
    (async () => await fnUpdates())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);

  const onSubmit = async (data) => {
    await fnUpdateUsername(data.username);
  };

  const copyToClipboard = () => {
    const url = `${baseUrl}/${usernameValue}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTimeClass = (datetime) => {
    const date = new Date(datetime);
    const now = new Date();
    const diffHours = (date - now) / (1000 * 60 * 60);
    
    if (diffHours < 2) return "text-red-500";
    if (diffHours < 24) return "text-amber-500";
    return "text-emerald-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b">
        {/* Welcome Card */}
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="bg-gradient-to-r from-[#FF6600] to-[#FFB300] p-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Welcome back, {user?.firstName || "User"}!
            </h2>
            <p className="text-blue-100 mt-1">
              Here&apos;s your schedule for the upcoming days
            </p>
          </div>
          <CardContent className="p-6">
            {loadingUpdates ? (
              <div className="flex justify-center py-8">
                <BarLoader color="#4f46e5" width={150} />
              </div>
            ) : upcomingMeetings && upcomingMeetings.length > 0 ? (
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => {
                  const meetingDate = new Date(meeting.startTime);
                  const timeClass = getTimeClass(meetingDate);
                  
                  return (
                    <div key={meeting.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col items-center justify-center bg-[#FF6600] rounded-lg p-2 text-white min-w-[60px]">
                        <span className="text-xs font-medium">{format(meetingDate, "MMM")}</span>
                        <span className="text-xl font-bold">{format(meetingDate, "d")}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {meeting.event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock size={14} className={timeClass} />
                          <span className={`text-sm ${timeClass}`}>
                            {format(meetingDate, "h:mm a")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                          <User size={14} />
                          <span>with {meeting.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                <Calendar size={48} className="text-gray-300 mb-2" />
                <p>No upcoming meetings scheduled</p>
                <p className="text-sm mt-1">Your calendar is clear for now</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Unique Link Card */}
        <Card className="border-none shadow-lg mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Link size={20} className="text-[#FF6600]" />
              Your Unique Link
            </CardTitle>
            <CardDescription>
              Customize your personal profile link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="flex-1 flex items-center border rounded-lg overflow-hidden bg-gray-50 text-gray-800">
                    <span className="px-3 py-2 bg-gray-100 border-r font-mono text-sm">
                      {baseUrl}/
                    </span>
                    <Input 
                      {...register("username")} 
                      placeholder="username" 
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="icon" 
                    onClick={copyToClipboard}
                    className="shrink-0"
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </Button>
                </div>
                
                {errors.username && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.username.message}</span>
                  </div>
                )}
                
                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{error?.message}</span>
                  </div>
                )}
              </div>
              
              {loading && (
                <div className="py-2">
                  <BarLoader width={"100%"} color="#4f46e5" />
                </div>
              )}
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#FF6600] hover:bg-[#FFB300]"
                >
                  Update Username
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
    </div>
  );
}