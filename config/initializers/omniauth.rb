OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, 
  '894141972380-v4tmg4db54npngi6ttuoem5mu4onshgm.apps.googleusercontent.com',
  'avOph_xW13HL1NaWXSPmKFOt',
  {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end