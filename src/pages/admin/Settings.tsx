import React, { useState } from 'react';
import { FiSave, FiRefreshCw } from 'react-icons/fi';

interface SettingsSection {
  title: string;
  description: string;
  fields: {
    id: string;
    label: string;
    type: 'text' | 'email' | 'switch' | 'select';
    value: string | boolean;
    options?: { value: string; label: string }[];
  }[];
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsSection[]>([
    {
      title: 'General Settings',
      description: 'Configure basic website settings and preferences.',
      fields: [
        {
          id: 'siteName',
          label: 'Site Name',
          type: 'text',
          value: 'RK Russia Admin',
        },
        {
          id: 'siteEmail',
          label: 'Admin Email',
          type: 'email',
          value: 'admin@rkrussia.com',
        },
        {
          id: 'maintenance',
          label: 'Maintenance Mode',
          type: 'switch',
          value: false,
        },
      ],
    },
    {
      title: 'Email Notifications',
      description: 'Configure email notification preferences.',
      fields: [
        {
          id: 'newUserNotification',
          label: 'New User Registration',
          type: 'switch',
          value: true,
        },
        {
          id: 'emailTemplate',
          label: 'Email Template',
          type: 'select',
          value: 'default',
          options: [
            { value: 'default', label: 'Default Template' },
            { value: 'minimal', label: 'Minimal Template' },
            { value: 'branded', label: 'Branded Template' },
          ],
        },
      ],
    },
  ]);

  const handleInputChange = (sectionIndex: number, fieldIndex: number, value: string | boolean) => {
    const newSettings = [...settings];
    newSettings[sectionIndex].fields[fieldIndex].value = value;
    setSettings(newSettings);
  };

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Saving settings:', settings);
  };

  const handleReset = () => {
    // Reset to default values
    // This is just a simple example - you would typically load default values from your backend
    window.location.reload();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            <FiRefreshCw />
            Reset
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            <FiSave />
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {settings.map((section, sectionIndex) => (
          <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.description}</p>

            <div className="space-y-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={field.id} className="flex items-center gap-4">
                  <label className="w-1/4 text-gray-700">{field.label}</label>
                  {field.type === 'switch' ? (
                    <button
                      onClick={() =>
                        handleInputChange(sectionIndex, fieldIndex, !field.value)
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        field.value ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          field.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : field.type === 'select' ? (
                    <select
                      value={field.value as string}
                      onChange={(e) =>
                        handleInputChange(sectionIndex, fieldIndex, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={field.value as string}
                      onChange={(e) =>
                        handleInputChange(sectionIndex, fieldIndex, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings; 