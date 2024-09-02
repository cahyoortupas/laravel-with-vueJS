<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Models\Subject;
use Illuminate\Http\Request;
class SubjectController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subject = Subject::all();

        return $this->sendResponse($subject, 'Success to get data for all subjects');
    }

}
